import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author.model';
import { ContentService } from 'src/app/services/content.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Titulo } from 'src/app/model/title.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  authors?: Author;
  titleByAuthors?: Titulo;
  titles: any;
  poetry: any;
  fragmento: string[] = [];
  autoresFavoritos: string[] = [];
  obrasFavoritas: string[] = [];
  totalFavoritos: number = 0;
  indiceInicial = 0;
  respuestaCorrecta: boolean = false;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getAuthors();

  }

  getAuthors(): void {
    this.contentService.getAuthor().subscribe(
      authors => {
        this.asignarAutores(authors)
      }
    );

  }
  asignarAutores(autores: Author) {
    this.authors = autores;
    console.log(this.authors);
  }
  agregarAutorFavorito(autor: string) {
    if (!this.autoresFavoritos.includes(autor)) {
      this.autoresFavoritos.push(autor);
      console.log(this.autoresFavoritos);
    }
    this.calcularTotalFavoritos();
  }
  agregarObraFavorito(obra: string) {
    if (!this.obrasFavoritas.includes(obra)) {
      this.obrasFavoritas.push(obra);
      console.log(this.obrasFavoritas);
    }
    this.calcularTotalFavoritos();
  }
  eliminarAutorFavorito(autor: string) {
    console.log("eliminando...");

    if (this.autoresFavoritos.includes(autor)) {
      console.log(this.autoresFavoritos.indexOf(autor))
      this.autoresFavoritos.splice(this.autoresFavoritos.indexOf(autor), 1)
      console.log(this.autoresFavoritos);
    }
    this.calcularTotalFavoritos();
  }
  eliminarObraFavorita(obra: string) {
    console.log("eliminando...");
    if (this.obrasFavoritas.includes(obra)) {
      this.obrasFavoritas.splice(this.obrasFavoritas.indexOf(obra), 1)
      console.log(this.obrasFavoritas);
    }
    this.calcularTotalFavoritos();
  }
  calcularTotalFavoritos() {
    return this.obrasFavoritas.length + this.autoresFavoritos.length;
  }
  asignarTitulo2(titulos: Object) {
    this.titles = Object.entries(titulos)
    console.log(this.titles);

    console.log(this.titles[1][1].title);

  }

  obtenerTitulo(author: string) {
    console.log(author);
    this.contentService.getTitle(author).subscribe(
      titles => {
        this.asignarTitulo2(titles)
      }
    )
  }
  asignarPoesia(data: Object) {
    this.poetry = Object.entries(data);
    console.log(this.poetry[0]);
    if (this.poetry[0][1] != 404) {
      this.respuestaCorrecta = true;
      console.log(this.poetry[0][1].lines.length);
      for (let i = 0; i < this.calcularFragmento(this.poetry[0][1].lines.length); i++) {
        this.fragmento[i] = this.poetry[0][1].lines[i];
        console.log(this.poetry[0][1].lines[i]);

      }
    } else {
      this.respuestaCorrecta = false;
    }

  }
  obtenerPoesia(title: string) {
    this.contentService.getPoetryByTitle(title).subscribe(
      poetry => {
        this.asignarPoesia(poetry)
      }
    )
  }
  obtenerValor(value: any) {
    console.log(value);

  }
  prevPage() {
    if (this.indiceInicial > 0)
      this.indiceInicial -= 10;
  }
  nextPage() {
    this.indiceInicial += 10;
    console.log(this.indiceInicial);

  }
  calcularFragmento(total: number): number {
    return Math.trunc(total * 0.25);
  }
  limpiar() {
    this.fragmento = []
  }
}
