class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>("5", "Mosh");
let pair2 = new KeyValuePair<number, string>(10, "Teo");
