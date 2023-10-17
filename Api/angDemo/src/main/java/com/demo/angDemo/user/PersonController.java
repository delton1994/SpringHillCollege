package com.demo.angDemo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping(path ="api/v1/person")
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping(path="{username}")
    public Person getPerson(@PathVariable String username){
        return personService.getPerson(username);
    }
    @PutMapping(path = "{id}")
    public void updatePerson(@PathVariable long id, @RequestBody String email){
        personService.updatePerson(id,email);
    }

    @PostMapping
    public void createPerson(@RequestBody Person person){
        personService.createPerson(person);
    }

    @DeleteMapping
    public void deletePerson(@RequestParam long id){
        personService.deletePerson(id);
    }
}