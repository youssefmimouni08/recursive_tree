import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/providers/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public users: any = [];
  bestChild = null;
  constructor(private usersService: UsersService) {}

  public async ngOnInit() {
    this.usersService
      .getUsers()
      .then((data) => {
        return data.map((element) => {
          return {
            ...element,
            favoriteChildData: element.favoriteChild
              ? this.getFavoriteChild(element.favoriteChild, element.children)
              : "no favorites",
          };
        });
      })
      .then((data) => {
        this.users = data;
        for (const family of this.users) {
          if (family.children) {
            const best = this.findBestChild(family.children);
            if (best) {
              this.bestChild = best;
              return;
            }
          }
        }
      });
  }

  public getFavoriteChild(favoriteChildId, childrenArray) {
    for (const child of childrenArray) {
      if (child.id === favoriteChildId) {
        return `${child.first_name} ${child.last_name}`;
      } else {
        if (child.children) {
          const result = this.getFavoriteChild(favoriteChildId, child.children);
          if (result != null) {
            return result;
          }
        }
      }
    }
    return null;
  }

  findBestChild(childrenArray) {
    for (const child of childrenArray) {
      if (child.bestChild) {
        return child;
      } else {
        if (child.children) {
          const result = this.findBestChild(child.children);
          if (result != null) {
            return result;
          }
        }
      }
    }
    return null;
  }
}
