import { Component, OnInit,Input,TemplateRef} from '@angular/core';
import { HeaderService, HttpService, CourseService, AlertService } from '../../services';
import { CmsLibraryVar } from '../../Constants/cms-library.var';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-document-tab',
  templateUrl: './document-tab.component.html',
  styleUrls: ['./document-tab.component.css']
})
export class DocumentTabComponent implements OnInit {
  @Input() documentId;
 



  totalVideosCount = 0;
  videoListValue;
  addVideosToCourse = false;
  page;
  pageSize;
  p;
  total;
  

  constructor(private courseService: CourseService,private alertService: AlertService,public constant: CmsLibraryVar, private modalService : BsModalService) { 

  }

  ngOnInit(){
    this.pageSize = 10;
    this.page=1;
    console.log(this.documentId)
    this.getCourseFileDetails();
  }
  getCourseFileDetails() {
    this.courseService.getFiles('Document',this.page,this.pageSize).subscribe(resp => {
      console.log(resp);
      if (resp && resp.isSuccess) {
        this.totalVideosCount = resp.data.count;
        this.videoListValue = resp.data && resp.data.rows.length ? resp.data.rows : []; 
      }
    });
  }
  openAddVideosToCourse(){
   
    this.addVideosToCourse = !this.addVideosToCourse;
  }
  pageChanged(e){
    console.log(e)
    this.page = e;
    this.getCourseFileDetails();
  }


   removeDoc(template: TemplateRef<any>,fileId, i) {
    let modalConfig={
      class : "modal-dialog-centered"
    }

     this.constant.fileId= fileId;
     this.constant.modalRef = this.modalService.show(template,modalConfig); 
    }

     deleteDoc(){
     this.courseService.deleteDocument(this.constant.fileId).subscribe((result)=>{
         if(result.isSuccess){
             this.constant.modalRef.hide();
             this.getCourseFileDetails();
             this.alertService.success(result.message);
         }
     })
   }


}
