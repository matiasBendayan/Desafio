import {Component, Injectable, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from './Posts';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalComentariosComponent} from '../modal-comentarios/modal-comentarios.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from "@angular/router";


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
@Injectable()
export class MainComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  hayOperaciones = false;
  displayedColumns = ['title', 'body', 'userId'];
  isLoading: true;
  valueList: MatTableDataSource<Posts>;
  urlGetPosts = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get(this.urlGetPosts).subscribe(values => {
      // @ts-ignore
      this.valueList = new MatTableDataSource<Posts>(values);
      this.valueList.paginator = this.paginator;
      this.valueList.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.valueList.filter = filterValue.trim().toLowerCase();

    if (this.valueList.paginator) {
      this.valueList.paginator.firstPage();
    }
  }

  operModal(row: any) {
    let dialogRef: MatDialogRef<ModalComentariosComponent>;
    dialogRef = this.dialog.open(ModalComentariosComponent, {
      width: '750px',
      height: '700px'
    });
    dialogRef.componentInstance.title = row.userId;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  AgregarPosts() {
    this.router.navigateByUrl('new-post');
  }
}
