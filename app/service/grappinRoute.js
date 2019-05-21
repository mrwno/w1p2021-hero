class ObjectsService {
  constructor() {
    this.objects = [];
  }
  add(object) {
    this.objects.pop(object);
    this.objects.push(object);
    console.log(this.objects)
  }
  has(object) {
    this.objects.some(_object => _object === object)
  }
}

// objectsService.add('grapin');
// objectsService.has('grapin') -> true

module.exports = new ObjectsService();