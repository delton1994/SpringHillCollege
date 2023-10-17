package com.demo.angDemo.student;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Student {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private String name;
    private String major;
    private String phone;
    private String email;
    private LocalDate dob;
    @Transient
    private Integer age;

    public Student(String name, String email, String major,String phone, LocalDate dob) {
        this.name = name;
        this.email = email;
        this.major = major;
        this.phone = phone;
        this.dob = dob;
    }
    public Integer getAge(){
        return Period.between(this.dob,LocalDate.now()).getYears();
    }
}