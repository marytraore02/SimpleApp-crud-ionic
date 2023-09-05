import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  emp!: Employee;
  constructor(private empService: EmployeeService,
              private toastController: ToastController,
              private activateRoute: ActivatedRoute,
              private navCtrl: NavController) { }


  ngOnInit() {
    this.emp = new Employee();
  }

  // Save méthode
  async save() {
    console.log('Employee Id coming from form' + this.emp.id);
    if (this.emp.id === undefined) {
    console.log('inside save method');
    this.empService.addEmployee(this.emp).subscribe(async (emp: HttpResponse<Employee>) => {
      let toast = await this.toastController.create({
        message: 'Details Added for ' + this.emp.nom,
        duration: 3000
      });
      return await toast.present().then(() => {
        this.navCtrl.navigateRoot('home');
      });
    });
  }
}

}
