package com.demo.angDemo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class PersonService {
    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository){
        this.personRepository = personRepository;
    }
    public Person getPerson(String username){
        Optional<Person> lookupPerson = personRepository.findByUsername(username);
        return lookupPerson.orElseThrow(()->new IllegalStateException("User not found"));
    }
    @Transactional
    public void updatePerson(long id,String email){
        Person nPerson = personRepository.findById(id).orElseThrow(() -> new IllegalStateException("Not a vaild id"));
        nPerson.setEmail(email);
        personRepository.save(nPerson);
    }
    public void createPerson(Person person){
        Optional<Person> checkPerson = personRepository.findById(person.getId());
        if(checkPerson.isPresent()){
           throw new IllegalStateException("User exists");
        }
        personRepository.save(person);
    }
    public void deletePerson(long id){
        Person toDelete = personRepository.findById(id).orElseThrow(()-> new IllegalStateException("Not a user"));
        personRepository.delete(toDelete);
    }
}