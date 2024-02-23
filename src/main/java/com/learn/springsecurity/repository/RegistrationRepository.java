package com.learn.springsecurity.repository;






import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.springsecurity.model.RegisterEntity;



public interface RegistrationRepository extends JpaRepository<RegisterEntity, Long> {
    // Additional query methods if needed
}
