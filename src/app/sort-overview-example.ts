import { Component } from "@angular/core";
import { Sort } from "@angular/material/sort";

export interface Livro {
  id: number;
  edicao: number;
  autor: string;
  titulo: string;
}

/**
 * @title Sorting overview
 */
@Component({
  selector: "sort-overview-example",
  templateUrl: "sort-overview-example.html",
  styleUrls: ["sort-overview-example.css"]
})
export class SortOverviewExample {
  livros: Livro[] = [
    {
      titulo: "Java How to Program",
      id: 1,
      autor: "Deitel & Deitel",
      edicao: 2007
    },
    {
      titulo: "Patterns of Enterprise Application Architecture",
      id: 2,
      autor: "Martin Fowler",
      edicao: 2002
    },
    {
      titulo: "Head First Design Patterns",
      id: 3,
      autor: "Elisabeth Freeman",
      edicao: 2004
    },
    {
      titulo: "Internet & World Wide Web: How to Program",
      id: 4,
      autor: "Deitel & Deitel",
      edicao: 2007
    }
  ];

  sortedData: Livro[];

  constructor() {
    this.sortedData = this.livros.slice();
  }

  sortData(sort: Sort) {
    const data = this.livros.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "titulo":
          return compare(a.titulo, b.titulo, isAsc);
        case "id":
          return compare(a.id, b.id, isAsc);
        case "autor":
          return compare(a.autor, b.autor, isAsc);
        case "edicao":
          return compare(a.edicao, b.edicao, isAsc);

        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
