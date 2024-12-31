package com.webapplication.carshop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DillersRepository extends JpaRepository<Dealers, Long> {
}
