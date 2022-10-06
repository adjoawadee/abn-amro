import http from "@/http-common";

class TutorialDataService {
  getAllShows(): Promise<any> {
    return http.get("/shows");
  }

  getPopularShows(): Promise<any> {
    return http.get("/shows?Showsort=1");
  }
}

export default new TutorialDataService();
