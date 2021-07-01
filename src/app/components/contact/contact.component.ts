import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
    text = 'contact page';
    contactForm: FormGroup;
    contact = {
        name: 'abc',
        email: 'abc@gmail.com',
        phone: 0
    };
    submitted = false;

    constructor() {
        this.createForm();
    }

    createForm(): void {
        this.contactForm = new FormGroup({
            'name': new FormControl(null, [
                Validators.required,
                Validators.minLength(4)
            ]),
            'email': new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            'phone': new FormControl(null, [Validators.required, Validators.min(3)])
        });
    }

    onSubmit(): void {
        this.submitted = true;
    }
}
