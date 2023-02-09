
export class CreateCitizenDto {
    readonly primaryPhoneNumber: number;
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfBirth?: Date;
    readonly stateOfBirth?: string;
    readonly townOfBirth?: string;
    readonly residenceAddress?: string;
    readonly profession?: string;
}


