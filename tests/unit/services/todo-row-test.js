import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupTest } from 'ember-mocha';
import startMirage from '../../helpers/start-mirage';

describe('Unit | Service | todo row', function() {

  setupTest('service:todo-row', {
    needs: ['model:task']
  });

  beforeEach(function() {
    startMirage(this.container);
  });

  it('check todo-row service methods', function() {
    let service = this.subject();

    return service.findAll().then((data) => {
      expect(data.get('length')).to.equal(0);

      return service.createTask('test', 'test', 'false').then(() => {
          return service.findAll().then((data) => {
            expect(data.get('length')).to.equal(1);

            const id = data.toArray()[0].get('id');
            return service.closeTask(id).then(() =>{
              return service.findAll().then((data) => {
                expect(data.toArray()[0].get('isCompleted')).to.equal(true);

                return service.reopenTask(id).then(() =>{
                  return service.findAll().then((data) => {
                    expect(data.toArray()[0].get('isCompleted')).to.equal(false);
                  });
                });
              });
            });
          });
      });
    })
  });
});
