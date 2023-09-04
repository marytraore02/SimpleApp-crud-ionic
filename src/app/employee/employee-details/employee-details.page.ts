import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from './Employee.model';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {
  emplList: any;
  constructor(private employeeService: EmployeeService,
    private toastConmtroller: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.loadAll();
  }

  //Afficher
  loadAll() {
    this.employeeService.getAllEmployee().subscribe( async (emplList: HttpResponse<Employee[]>) => {
      this.emplList = emplList.body;
      console.log(this.emplList);
      let toast = await this.toastConmtroller.create({
        message: 'Employee Details Loaded Successfully',
        duration: 3000
      });
      return await toast.present();
    });
  }

  // Supprimer
  async deleteEmployee(id: string) {
    console.log('Employee Id to Delete ' + id);
    const confirm = this.alertCtrl.create({
      message: 'Do You agree to Delete',
      buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Pressed Disagree');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              this.employeeService.deleteEmployee(id).subscribe(async () => {
                let toast = await this.toastConmtroller.create({
                  message: 'Details Deleted for ' + id,
                  duration: 3000
                });
                toast.present();
                this.navCtrl.navigateRoot('/home');
              });
            }
          }
      ]
    });
    (await confirm).present();
  }

  //Refresh
  doRefresh(event:any) {
    console.log('Begin async operation');
    this.loadAll();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
