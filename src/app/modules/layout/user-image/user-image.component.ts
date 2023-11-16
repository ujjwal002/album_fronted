import { Component, OnInit,Inject  } from '@angular/core';
import { UserServiceService } from '../../user/service/user-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { AddImageComponent } from '../add-image/add-image.component';
import { CropImageComponent } from '../crop-image/crop-image.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteCompoComponent } from '../delete-compo/delete-compo.component';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { AddImageComponent } from '../add-image/add-image.component';
// import { CropImageComponent } from '../crop-image/crop-image.component';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css'],
})
export class UserImageComponent implements OnInit {
  public id: any;
  public imagePath: any;
  public photo: any;
  public idd: any;
  isSubscribedToEmailsMessage: any = true;

  selectedFiles: FileList | any;
  owner_id: any;

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private snackBar: MatSnackBar


    
  ) {}

  openDialog(): void {
    const id = this.id;
    const dialogRef = this.dialog.open(AddImageComponent, {
      height: '400px',
      width: '600px',
      data: { id: this.id }, 
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getall()
      console.log('The dialog was closed');
      console.log(result);
      });
  }
  openCropped(): void {
    const id = this.id;
    const dialogRef = this.dialog.open(CropImageComponent, {
      height: '700px',
      width: '800px',
      data: { id: id }, 
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getall()
      console.log('The dialog was closed');
      console.log(result);
      });
  }
  cropImage(id:any): void {
    const dialogRef = this.dialog.open(CropImageComponent, {
      height: '900px',
      width: '1200px',
      data: { id: id }, 
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getall()
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam;
    console.log("album_id");
    
    console.log(this.id);

    this.getall();
  }
  getall() {
    this.userService.getImage(this.id).subscribe((Response) => {
      console.log(Response.photo[0]);
      this.photo = Response.photo;
      this.idd = Response;
      console.log('------');

      console.log(Response.photo[0]);
    });
  }
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }
  getImageUrl(file: File): string {
    return URL.createObjectURL(file);
  }
  onSubmit(): void {
    if (this.selectedFiles) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('image', this.selectedFiles[i]);
      }

      this.userService.addImage(this.id, formData).subscribe((Response) => {
        console.log(Response);
        this.isVisible = false;
        this.getall();
        this.selectedFiles = null;
        // this.router.navigate([`/dashboard/imageSetting/${this.data.id}`])
      });
    }
  }
  // onDelete(id: any) {
  //   console.log(id.id);
  //   this.userService.deleteImage(id).subscribe((Response) => {
  //     console.log(Response);
  //     this.toastr.success('Image deleted successfully');

  //     this.getall();
  //   },
  //   (error) => {
  //     console.log('error', error.error.message);
  //     this.photo=[]
  //     // this.toastr.error('No album found');
  //   }
  //   );
  // }
  onDelete(id: any) {
    // this.page=1;
    // this.limit = 8
    const dialogRef = this.dialog.open(DeleteCompoComponent, {
      // height: '100px',
      // width: '500px',
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'yes',
          cancel: 'No',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('hii');
        this.userService.deleteImage(id).subscribe((Response) => {
          console.log(Response);
          this.toastr.success('Image deleted successfully');
    
          this.getall();
        });

        // this.snackBar.open('Image deleted succesfully', '', {
        //   duration: 2000,
        // });
      }
    });
  }
  onCrop(id:any){
    this.router.navigate([`/dashboard/crop/${id}`])
  }
  
  
  onCheckboxChange(id: any, approval: any) {
    const data = {
      approval: approval,
    };

    this.userService.updateImage(id, data).subscribe((Response) => {
      console.log(Response);
    });
  }
 
}
