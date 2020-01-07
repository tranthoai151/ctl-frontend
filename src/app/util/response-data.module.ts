export class ResponseData {
    constructor(
      public status: number,
      public message: string,
      public data: Object,
      public pageIndex: number,
      public totalPage: number,
      public perPage: number) {}
  }
