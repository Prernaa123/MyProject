package org.jsp.ecommerceapp.service;

import org.jsp.ecommerceapp.dao.MerchantDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class MerchantService {
	@Autowired
	MerchantDao merchantDao;
	
	public ResponseStructure<Merchant> saveMerchant(Merchant merchnat) {
		ResponseStructure<Merchant> structure = new ResponseStructure<>();
		structure.setMessage("User saved");
		structure.setData(merchantDao.saveMerchant(merchnat));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return structure;
	}

}
