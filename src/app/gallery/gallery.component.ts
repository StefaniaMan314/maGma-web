import { Component, OnInit } from "@angular/core";
import { GalleryItem, ImageItem } from "ng-gallery";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  items: string[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    for (let i = 1; i <= 129; i++) {
      this.items.push(`assets/gallery/2022/${i}.JPG`);
    }
  }
}
