package org.jsp.ecommerceapp.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MerchantDao {
	@Autowired
	private MerchantRepository merchantRepository;

	public Merchant saveMerchant(Merchant merchant) {
		return merchantRepository.save(merchant); // it will do save as well as update
	}

	public Optional<Merchant> findById(int id) {
		return merchantRepository.findById(id);
	}

	public boolean deleteById(int id) {
		Optional<Merchant> recMerchant = findById(id);
		if (recMerchant.isPresent()) {
			merchantRepository.delete(recMerchant.get());
			return true;
		}
		return false;
	}

	public List<Merchant> findAll() {
		return merchantRepository.findAll();
	}

	public Optional<Merchant> verifyMerchant(long phone, String password) {
		return merchantRepository.verify(phone, password);
	}

	public Optional<Merchant> verifyMerchant(String email, String password) {
		return merchantRepository.verify(email, password);
	}

	public List<Merchant> findByName(String name) {
		return merchantRepository.findByName(name);
	}

	public Optional<Merchant> findByPhone(long phone) {
		return merchantRepository.findByPhone(phone);
	}

	public Optional<Merchant> findByEmail(String email) {
		return merchantRepository.findByEmail(email);
	}

	public Optional<Merchant> findByToken(String token) {
		return merchantRepository.findByToken(token);
	
	}
}
