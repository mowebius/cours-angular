import { Subject } from 'rxjs/Subject';

export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (elt) => {
            return elt.id === id;
          }
        );
        return appareil;
    }

    addAppareil(name: string, status: string) {
        const appareil = {
            id: 0,
            name: name,
            status: status
        }
        appareil.id = this.appareils[this.appareils.length - 1].id + 1;
        this.appareils.push(appareil);
        this.emitAppareilSubject();
    }

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }
    
    switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
          this.emitAppareilSubject();
        }
    }
    
    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }
    
    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }
}
