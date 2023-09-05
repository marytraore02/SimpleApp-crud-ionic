import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-update-empooyee',
  templateUrl: './update-empooyee.page.html',
  styleUrls: ['./update-empooyee.page.scss'],
})
export class UpdateEmpooyeePage implements OnInit {

  emp!: Employee;
  data: any;
  nom: any;
  age: any;
  salaire: any;
  dept: any;
  constructor(private empService: EmployeeService,
              private toastController: ToastController,
              private activateRoute: ActivatedRoute,
              private navCtrl: NavController,
              private http: HttpClient) { }

  ngOnInit() {
        // On creer un objet
        this.emp = new Employee();

        // On recupère d'Id dans le paramètre
        const id = this.activateRoute.snapshot.paramMap.get('id');
        console.log('Employee Id ' + id );
        if ( id !== null ) {
          console.log('Id is not Null Setting details for Employee');
          this.empService.getEmployeeById(id).subscribe((emp: HttpResponse<Employee>) => {
            this.data = emp.body;
            console.log(this.data);
            this.nom = this.data.nom;
            this.age = this.data.age;
            this.salaire = this.data.salaire;
            this.dept = this.data.deptName;
            console.log(this.age);
            console.log(this.salaire);
            console.log(this.dept);
          });
        }
  }

    // Mise à jour employe
    Update(){
      console.log('inside update method' + this.data.id);

      this.empService.updateEmployee(this.data).subscribe(async (data: HttpResponse<Employee>) => {
        let toast = await this.toastController.create({
          message: 'Details Updated for ' + this.data.nom,
          duration: 3000
        });
        return await toast.present().then(() => {
          this.navCtrl.navigateRoot('home');
        });
      });
    }

    updateEntity(id: number, data: any) {
      const URL = `http://localhost:8080/employees/${id}`;
      this.http.put(URL, data).subscribe(
          (response) => {
              console.log("Update successful");
              this.navCtrl.navigateRoot('home');
          },
          (error) => {
            console.log("Error update");
          }
      );
  }

    back(): void {
      window.history.back()
    }
  

}
