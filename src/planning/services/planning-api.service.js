import http from "../../shared/services/http-common.js";


export  class PlanningApiService {
    getAllRestaurants(){
        return http.get("/restaurants");
    }
    getRestaurantById(id){
        return http.get(`/restaurants/${id}`);
    }
    getMenusByRestaurantId(id){
        return http.get(`/restaurants/${id}/?_embed=menus`);
    }
}
