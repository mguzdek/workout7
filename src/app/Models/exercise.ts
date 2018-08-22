export class Exercise {
    name: string;
    title: string;
    description: string;
    image: string;
    duration: number;
    nameSound?: string;
    procedure?: string;
    videos?: Array<string>

    /**
     *
     */
    constructor(
        name: string,
        title: string,
        description: string,
        image: string,
        duration: number,
        nameSound?: string,
        procedure?: string,
        videos?: Array<string>
    ) {
        this.name = name;  
        this.title = title;
        this.description = description;
        this.image = image;
        this.duration = duration;
        this.nameSound = nameSound;
        this.procedure = procedure;
        this.videos = videos;      
    }
}