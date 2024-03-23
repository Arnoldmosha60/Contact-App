package com.example.contactapi.repo;

import com.example.contactapi.domain.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactRepo extends JpaRepository<Contact, String> {
    @Override
    Optional<Contact> findById(String id);
}
