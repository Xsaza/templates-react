// MOCK HERE

// target - class constructor
const logClass = (target: Object) => {
  console.log('from class decorator: ', target);
}

// target - instanse prototype (the same for decorators below)
const logProp = (target: Object, propKey: string): any => {
  console.log('from prop decorator: ', target);
}

const logMethod = (target: Object, propKey: string, descriptor: any) => {
  console.log('from method decorator: ', target);
}

const logAccessorSetter = (target: Object, propKey: string, descriptor: any) => {
  console.log('from setter decorator: ', target);
}

@logClass
class User {

  @logProp
  secret: number;

  @logMethod
  someMethod() {}

  constructor(secret: number) {
    this.secret = secret;
  }

  @logAccessorSetter
  get some(): string { return '' }

}
