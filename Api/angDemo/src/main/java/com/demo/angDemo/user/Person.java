package com.demo.angDemo.user;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Person {
    @Id
    @SequenceGenerator(
            name = "person_sequence",
            sequenceName = "person_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "person_sequence"
    )
    private long id;
    private String email;
    private String username;
    @Transient
    private String password;

    public Person(long id, String email, String username) {
        this.id = id;
        this.email = email;
        this.username = username;
    }
}
