package com.data.customer;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private final List<Customer> customers = new ArrayList<Customer>();
    @Override
    public void init() throws ServletException {
        try {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        customers.add(new Customer("Nguyễn Văn A", new Date(),"Hà Nội","https://www.bom.edu.vn/upload/2025/03/anh-dai-dien-dep-cho-nu-anime-9.webp"));
        customers.add(new Customer("Đào Văn B", sdf.parse("12/12/2024"),"Hà Nội","https://www.bom.edu.vn/upload/2025/03/anh-dai-dien-dep-cho-nu-anime-4.webp"));
//        customers.add(new Customer("Phạm Thị C", LocalDate.of(1995,4,25),"Hà Nội","https://www.bom.edu.vn/upload/2025/03/anh-dai-dien-dep-cho-nu-anime-6.webp"));
//        customers.add(new Customer("Bàng Trọng D", LocalDate.of(1985,1,12),"Hà Nội","https://www.bom.edu.vn/upload/2025/03/anh-dai-dien-dep-cho-nu-anime-7.webp"));
//        customers.add(new Customer("Nguyễn Xuân E", LocalDate.of(1998,7,22),"Hà Nội","https://www.bom.edu.vn/upload/2025/03/anh-dai-dien-dep-cho-nu-anime-9.webp"));
    }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("customers", customers);
        req.getRequestDispatcher("data.jsp").forward(req, resp);
    }
}
