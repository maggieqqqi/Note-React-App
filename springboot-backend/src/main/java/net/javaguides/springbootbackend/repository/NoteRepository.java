package net.javaguides.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springbootbackend.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long>{

}
