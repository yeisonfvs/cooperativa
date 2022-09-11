import { Component, OnInit } from '@angular/core';
import {Documento, DocumentosService} from '../../servicios/documentos.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-documento',
  templateUrl: './editar-documento.component.html',
  styleUrls: ['./editar-documento.component.css']
})
export class EditarDocumentoComponent implements OnInit {

  id = null;

  public formEditar: FormGroup

  constructor(private DocumentosService:DocumentosService, private router:Router, private activeRoute:ActivatedRoute, private formBuilder:FormBuilder) {

    this.formEditar = this.formBuilder.group({

      nombre:['',[Validators.required]],
      tipo:['',[Validators.required]],
      fechaRegistro:['',[Validators.required]],
      cliente:['',[Validators.required]],
      empleado:['',[Validators.required]],
    })
      

    const { id } = this.activeRoute.snapshot.params;
    this.id = id;
    console.log('id de entrada:'+id);

     if(id){
      this.DocumentosService.getDocumentoId(id).subscribe(
        res =>{
          this.formEditar = res;

          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }

  ngOnInit(): void {}

  onSubmit( formEditar: FormGroup ) {

    console.log(this.formEditar.value)
    if(this.id){
      this.DocumentosService.editDocumento( this.id, this.formEditar.value )
        .subscribe( resp => {
          console.log(resp);
          
        }
      );
    } else {
      this.DocumentosService.addDocumento( this.formEditar.value )
        .subscribe( resp => {
          console.log(resp);
          
        }
      );
    }
    
  }

  // editar(){
  //   const { id } = this.formEditar;
  //    this.DocumentosService.editDocumento(1, this.formEditar).subscribe(
  //     res =>{
  //       console.log(res);
  //    },
  //     err=>console.log(err)
  //   );
  // }

}
