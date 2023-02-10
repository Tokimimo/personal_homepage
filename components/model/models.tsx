import { StaticImageData } from "next/image";

export class Work {
    constructor(
        public id?: string,
        public title?: string,
        public readonly thumbnail?: StaticImageData,
        public readonly description?: string
      ) {}


    private toObject() {
        return {
          id: this.id,
          title: this.title,
          thumbnail: this.thumbnail,
          description: this.description
        }
      }

    serialize() {
        return JSON.stringify(this.toObject());
      }
    
      static fromSerialized(serialized: string) {
        const work: ReturnType<Work["toObject"]> = JSON.parse(serialized);
    
        return new Work(
            work.id,
            work.title,
            work.thumbnail,
            work.description
        );
      }
}