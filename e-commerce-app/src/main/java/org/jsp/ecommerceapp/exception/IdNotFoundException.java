package org.jsp.ecommerceapp.exception;

public class IdNotFoundException extends RuntimeException{
	@Override
	public String getMessage() {
		return "invalid id";
		
	}
	

}
