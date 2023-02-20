import { Component, OnInit } from "@angular/core";
import { Gallery, GalleryItem, ImageItem } from "ng-gallery";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[];

  constructor(public gallery: Gallery) {
    this.items = [];
  }

  ngOnInit() {
    for (let i = 1; i <= 129; i++) {
      this.items.push(
        new ImageItem({
          src: `assets/gallery/2022/${i}.JPG`,
          thumb: `assets/gallery/2022/${i}.JPG`,
        })
      );
    }
    this.gallery.ref().load(this.items);
  }
}
