import { unWrap, getErrorResponse } from "~/utils/fetchUtils"

export default function({ $config }, inject){
    const headers = {
        "X-Algolia-API-Key": $config.algolia.key,
        "X-Algolia-Application-Id": $config.algolia.appId
    }
    inject('dataApi', {
        getHome,
        getReviewsByHomeId,
        getUsersByHomeId,
        getHomesByLocation
    })
    async function getHome(homeID){
        try{
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/${homeID}`, { headers }))
        } catch(error) {
            return getErrorResponse(error)
        }
    }

    async function getReviewsByHomeId(homeId){
        try{
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/reviews/query`, {
                headers, 
                method: 'POST',
                body: JSON.stringify({
                    filters: `homeId: ${homeId}`,
                    hitsPerPage: 6,
                    attributesToHighlight: []
                })
            }))
        } catch(error) {
            return getErrorResponse(error)
        }
    }

    async function getUsersByHomeId(homeId){
        try{
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/users/query`, {
                headers, 
                method: 'POST',
                body: JSON.stringify({
                    filters: `homeId: ${homeId}`,
                    attributesToHighlight: []
                })
            }))
        } catch(error) {
            return getErrorResponse(error)
        }
    }
    async function getHomesByLocation(lat, lng, radiusInMeters = 1500){
        try{
            return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`, {
                headers, 
                method: 'POST',
                body: JSON.stringify({
                    aroundLatLng: `${lat},${lng}`,
                    aroundRadius: radiusInMeters,
                    attributesToHighlight: [],
                    hitsPerPage: 10,
                })
            }))
        } catch(error) {
            return getErrorResponse(error)
        }
    }
}