export class popular_movies{
    public Id !: number;
    public Movie_name!: string;
    public image!:string;
    public reviews!: reviews;
    


}
class reviews{
    public author!:string;
    public published_on !:number;
    public review!:string
    public rating!: number;


}