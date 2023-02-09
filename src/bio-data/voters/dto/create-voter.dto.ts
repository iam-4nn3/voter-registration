import { CreateCitizenDto } from "../../../bio-data/citizens/dto/create-citizen.dto";


export class CreateVoterDto {
    readonly wardId: string;
    readonly citizen: CreateCitizenDto; //In case you want to create a user along with student

}