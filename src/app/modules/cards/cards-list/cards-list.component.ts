import { Component, HostListener, OnInit } from "@angular/core";
import { CardsService } from "../cards.service";
import { Card } from "../interfaces/Cards";

@Component({
  selector: "app-cards-list",
  templateUrl: "./cards-list.component.html",
  styleUrls: ["./cards-list.component.scss"],
})
export class CardsListComponent implements OnInit {
  public cardsData: Card[] = [];
  public searchText: string = "";
  public filteredCardData: Card[] = [];
  public pageSize: number = 12;
  public pageLengthComparison: number = 12;
  public currentPage: number = 0;
  public isLoading: boolean = false;
  constructor(private _cardsList: CardsService) {}

  ngOnInit(): void {
    this.getListData();
  }

    /**
   *
   * Fetch List from Server (JSON)
   * @param none
   * @returns Array
   * @memberof CardsListComponent
   */
  getListData() {
    this.isLoading = true;
    this._cardsList.getListData().subscribe({
      next: (data: any) => {
        let pageData = [];
        if (
          data.tourismDefinitionsList.length - this.cardsData.length >
          this.pageLengthComparison
        ) {
          pageData = data.tourismDefinitionsList.slice(
            this.currentPage * (this.pageSize - this.pageLengthComparison),
            this.pageSize
          );
          this.cardsData = this.cardsData.concat(pageData);
          this.filteredCardData = [...pageData];
        } else {
          pageData = data.tourismDefinitionsList.slice(
            this.cardsData.length,
            data.tourismDefinitionsList.length
          );
          this.cardsData = this.cardsData.concat(pageData);
          this.filteredCardData = this.filteredCardData.concat(pageData);
        }
        this.isLoading = false;
      },
      error: (e) => (this.isLoading = true),
      complete: () => console.info("complete"),
    });
  }

  assignCopy() {
    this.filteredCardData = Object.assign([], this.cardsData);
  }
  filterItem() {
    if (!this.searchText) {
      this.assignCopy();
    } // when nothing has typed
    this.filteredCardData = Object.assign([], this.cardsData).filter(
      (item: any) =>
        item.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    );
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.currentPage = this.currentPage + 1;
      this.pageSize = this.pageSize + this.pageLengthComparison;
      this.getListData();
    }
  }
}
