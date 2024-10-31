import { Location } from "../../interfaces/location.interface";


export interface ILocationRepository {
    findAll(): Promise<Location[]>
    findById(locationId: string): Promise<Location | null>

}