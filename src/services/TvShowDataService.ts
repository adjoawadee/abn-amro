import http from "@/http-common";

class TutorialDataService {
  getAllShows(): Promise<any> {
    return http.get("/shows");
  }

  getPopularShows(): Promise<any> {
    return http.get("/shows?Showsort=1");
  }

  getShowDetails(id: any): Promise<any> {
    return http.get(`/shows/${id}?embed=cast`);
  }
}

export default new TutorialDataService();
