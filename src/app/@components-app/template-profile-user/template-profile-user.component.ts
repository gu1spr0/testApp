import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'app-template-profile-user',
    styleUrls: ['./template-profile-user.component.scss'],
    template: './template-profile-user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateProfileUserComponent {
    @Input() data: any;
    @Input() keys: { key: string; value:string }[] = [
        { key: 'Usuario:', value: 'userName' },
        { key: 'Nombre:', value: 'name' },
        { key: 'Teléfono:', value: 'phone' },
        { key: 'Email:', value: 'email' }
    ];
}