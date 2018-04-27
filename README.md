# mixin-promise

Get a promise from your method


## install

```cmd
meteor add cesarve:mixin-promise
```

## Usage

```js
//example method creation
import {ValidatedMethod} from 'meteor/mdg:validated-method'
import promiseMixin from 'cesarve:mixin-promise'
import schemaMixin from 'cesarve:mixin-schema'

export const methodUpdate = new ValidatedMethod({
    name: 'methodUpdate',
    mixins: [schemaMixin, promiseMixin],
    schema: new SimpleSchema({  //see cesarve:mixin-schema
        _id: String,
        name: String,
        surname: String,
    }), //
    run({_id,...doc}) {
        if (!Roles.userIsInRole(this.userId,['admin'])){
            throw new Meteor.Error(403, 'Access denied')
        }
        return MyCollection.update(_id, {$set: {...doc, updatedAt: new Date()} })

    }
})
```


```js
//example method called as promise
import {methodUpdate} from './path/to/method'

 methodUpdate.promise({_id: 'xxxx', name:'xxxx', surname:'xxxxxx'})
     .then(()=>console.log('success'))
     .catch((err)=>console.error(err))

```

