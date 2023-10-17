package com.demo.angDemo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public void createStudent(Student student){
        Optional<Student> student1 = studentRepository.findStudentByEmail(student.getEmail());
        if(student1.isPresent()){
            throw new IllegalStateException("Email taken");
        }
        studentRepository.save(student);
    }
    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public Student getStudent(String studentEm){
        if(!studentRepository.findStudentByEmail(studentEm).isPresent()){
            throw new IllegalStateException(
                    "student with email " + studentEm + " does not exist"
            );
        }
        return (Student) Stream.of(
                studentRepository.findAll()
                        .stream().filter(s-> Objects.equals(s.getEmail(), studentEm))
        );
    }
    @Transactional
    public void updateStudent(Long studentId, String name, String email){
       Student student = studentRepository.findById(studentId)
               .orElseThrow(()-> new IllegalStateException(
                       "Student with id " + studentId + " does not exist"
               ));

       if(name != null &&
               name.length() > 0 &&
               !Objects.equals(student.getName(),name)){
           student.setName(name);
       }
        if(email != null &&
                email.length() > 0 &&
                !Objects.equals(student.getEmail(),email)){
            Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);
            if(studentOptional.isPresent()){
                throw new IllegalStateException("Email Taken");
            }
            student.setEmail(email);
        }
    }
    public void deleteStudent(long studentId){
       boolean exists = studentRepository.existsById(studentId);
        if(!exists){
            throw new IllegalStateException(
                    "student with id " + studentId + " does not exist."
            );
        }
        studentRepository.deleteById(studentId);
    }
}