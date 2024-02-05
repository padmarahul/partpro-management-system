package com.unt.se.ppms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unt.se.ppms.entities.User;

public interface LoginRepository extends JpaRepository<User, Integer> {
	
	Optional<User> findByUserName(String username);
	
	Optional<User> findByEmailId(String emailId);
	
	boolean existsByUserName(String username);
	
	boolean existsByEmailId(String emailId);

}