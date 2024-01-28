package com.ssafying;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SsafyingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsafyingApplication.class, args);
	}


}
