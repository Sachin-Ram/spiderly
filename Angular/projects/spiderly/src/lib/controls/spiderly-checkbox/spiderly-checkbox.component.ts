import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequiredComponent } from '../../components/required/required.component';
import { TranslocoService } from '@jsverse/transloco';
import { PrimengModule } from '../../modules/primeng.module';

@Component({
    selector: 'spiderly-checkbox',
    templateUrl: './spiderly-checkbox.component.html',
    styles: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        PrimengModule,
        RequiredComponent
    ]
})
export class SpiderlyCheckboxComponent extends BaseControl implements OnInit {
    @Input() fakeLabel = true;
    @Input() initializeToFalse = false;
    @Input() inlineLabel = false;

    constructor(
        protected override translocoService: TranslocoService,
    ) { 
        super(translocoService);
    }

     override ngOnInit(){
        if (this.initializeToFalse == true)
            this.control.setValue(false);

        super.ngOnInit();
    }
}
