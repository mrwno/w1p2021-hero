class ObjectsService {
  constructor() {
    this.objects = [];
  }
  add(object) {
    this.objects.push(object);
    console.log(this.objects)
  }
  toggle(object) {
    this.objects.pop(object);
    this.objects.push(object);
    console.log(this.objects)
  }
  has(object) {
    return this.objects.some(_object => _object === object)
  }
  delete(){
    objects.lenght = 0;
  }
}

// objectsService.add('grapin');
// objectsService.has('grapin') -> true

module.exports = new ObjectsService();

