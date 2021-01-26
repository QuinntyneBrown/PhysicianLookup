import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhysiciansService } from '../physicians.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Physician } from '../physician';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'pl-edit-physician',
  templateUrl: './edit-physician.component.html',
  styleUrls: ['./edit-physician.component.scss']
})
export class EditPhysicianComponent implements OnInit, OnDestroy {

  public physician: Physician = {} as Physician;
  private readonly _destroyed: Subject<void> = new Subject();

  public form = new FormGroup({     
    title: new FormControl(this.physician.title, [Validators.required]),
    firstname: new FormControl(this.physician.firstname, [Validators.required]),
    lastname: new FormControl(this.physician.lastname, [Validators.required]), 
    street: new FormControl(this.physician.street, [Validators.required]),
    city: new FormControl(this.physician.city, [Validators.required]),
    province: new FormControl(this.physician.province, [Validators.required]),
    postalCode: new FormControl(this.physician.postalCode, [Validators.required]),
    phoneNumber: new FormControl(this.physician.phoneNumber, []),
    emailAddress: new FormControl(this.physician.emailAddress, [Validators.email]),
    website: new FormControl(this.physician.website, []),        
  });
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private physiciansService: PhysiciansService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.physician.physicianId = this.activatedRoute.snapshot.params.id;

    if(this.physician.physicianId) {
      this.physiciansService.getById({ physicianId: this.activatedRoute.snapshot.params.id }).pipe(
        map(x => {
          this.form.patchValue({
            title: x.title,
            firstname : x.firstname,
            lastname : x.lastname,
            street : x.street,
            city : x.city,
            province : x.province,
            postalCode : x.postalCode,
            phoneNumber : x.phoneNumber,
            emailAddress : x.emailAddress,
            website : x.website
          });
        })
      ).subscribe();
    }
  }

  public handleSaveClick(): void {
    const physician: Physician = {} as Physician;

    this.physician.title = this.form.value.title;
    this.physician.firstname = this.form.value.firstname;
    this.physician.lastname = this.form.value.lastname;
    this.physician.street = this.form.value.street;
    this.physician.city = this.form.value.city;
    this.physician.province = this.form.value.province;
    this.physician.postalCode = this.form.value.postalCode;
    this.physician.phoneNumber = this.form.value.phoneNumber;
    this.physician.emailAddress = this.form.value.emailAddress;
    this.physician.website = this.form.value.website;

    this.physiciansService.save({ physician: this.physician }).pipe(
      takeUntil(this._destroyed)
    ).subscribe(
      () => this.form.reset(),
      errorResponse => {
        // handle error
      }
    );

  }

  public handleCancelClick(): void {
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
