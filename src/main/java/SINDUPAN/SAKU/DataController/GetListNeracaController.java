package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListCOAJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListNeracaJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetNeracaModel;
import SINDUPAN.SAKU.Utilies.MediaTypeUtils;
import SINDUPAN.SAKU.Utilies.MyFileNotFoundException;
import SINDUPAN.SAKU.WordProcessingController;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRichTextString;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties;
import org.springframework.core.io.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.lang.String;

import java.net.*;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Collection;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api")
public class GetListNeracaController {

    @Autowired
    public GetListNeracaJDBCTemplate masterJDBCTemplate;
    public WordProcessingController jdbctemplateforexcel;
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public ResourceLoader resourceLoader;
    @Autowired
    public ServletContext servletContext;

//    @GetMapping("/getNeraca_old")
//    public List<GetNeracaModel> listDataNeracaold()
//    {
//        return masterJDBCTemplate.listDataNeracaold();
//    }
    @GetMapping("/getNeraca/{tgl_trx}")
    public List<GetNeracaModel> listDataNeracaVar(@PathVariable String tgl_trx)
    {
        return masterJDBCTemplate.listDataNeraca(tgl_trx);
    }
    @GetMapping("/getLabaRugi/{tgl_trx}")
    public List<GetNeracaModel> listDatalbrg(@PathVariable String tgl_trx)
    {
        return masterJDBCTemplate.listlabarugi(tgl_trx);
    }
    @PostMapping("/getNeracaExcel/{tgl_trx}")
    public ResponseEntity<Resource> listDataNeracaVarExcel(@PathVariable String tgl_trx) throws IOException {
        FileInputStream file = new FileInputStream(new File("C:/Users/Hanif Muhammad/Downloads/NeracaExcelTemplate.xlsx"));
        Workbook woorkbook =  new XSSFWorkbook(file);
        Sheet sheet = woorkbook.getSheetAt(0);

        Font font = woorkbook.createFont();
        font.setBold(true);
        int count = masterJDBCTemplate.countnrc();
        int u = 0;
        Double total;
        for(int k = 1; k<4; k++)
        {

            u += 1;
            String countprefix = String.valueOf(k);
            int countsubnrc = masterJDBCTemplate.countsubnrc(tgl_trx, countprefix);

            // Header
            List<GetNeracaModel> getNeracaModelsHeader = masterJDBCTemplate.listDataNeracaHeader(tgl_trx, countprefix);
            Row rowheader;
            if(k == 1)
            {
                u = 7;
            }
            rowheader = sheet.getRow((short)u);
            u += 1;
            rowheader.getCell(2).setCellValue(getNeracaModelsHeader.get(0).getHEADER_COA());

            // Detail
            List<GetNeracaModel> getNeracaModels = masterJDBCTemplate.listDataNeracaDetail(tgl_trx, countprefix);
            for(int i = 0; i<countsubnrc; i++)
            {

                Row row = sheet.getRow((short)i + u);
                row.getCell(1).setCellValue(getNeracaModels.get(i).getNOCOA());
                row.getCell(2).setCellValue(getNeracaModels.get(i).getNAMACOA());
                row.getCell(3).setCellValue(getNeracaModels.get(i).getSALDO());

            }
            u +=countsubnrc;

            //Total
            u+=1;
            total = masterJDBCTemplate.total(tgl_trx, countprefix);
            Row rowtotal = sheet.getRow((short)u);

            XSSFRichTextString s1 = new XSSFRichTextString("TOTAL");
            s1.applyFont(font);
            rowtotal.getCell(2).setCellValue(s1);
            rowtotal.getCell(3).setCellValue(total);
            u+=1;

        }
//        // Header
//        List<GetNeracaModel> getNeracaModelsHeader = masterJDBCTemplate.listDataNeracaHeader(tgl_trx, "1");
//        Row rowheader = sheet.getRow((short)7);
//        rowheader.getCell(2).setCellValue(getNeracaModelsHeader.get(0).getHEADER_COA());
//
//        // Detail
//        List<GetNeracaModel> getNeracaModels = masterJDBCTemplate.listDataNeracaDetail(tgl_trx, "1");
//
//        for(int i = 0; i<count; i++)
//        {
//            Row row = sheet.getRow((short)i + 8);
//
//            row.getCell(1).setCellValue(getNeracaModels.get(i).getNOCOA());
//            row.getCell(2).setCellValue(getNeracaModels.get(i).getNAMACOA());
//            row.getCell(3).setCellValue(getNeracaModels.get(i).getSALDO());
//
//        }
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
        LocalDateTime now = LocalDateTime.now();
        String time = dtf.format(now);
        Path path = Paths.get("C:/Users/Hanif Muhammad/Documents/SAKU/SAKU/src/main/resources/static/view/DOC/NeracaExcelTemplate" + time + ".xlsx");
//        final String baseUrl = ServletUriComponentsBuilder.fromCurrentContextPath().build().toUriString();
//        String path ="src\\main\\resources\\static\\view\\DOC\\NeracaExcelTemplate"+time+".xlsx";
//        Path path = Paths.get("src\\main\\resources\\static\\view\\DOC\\NeracaExcelTemplate"+time+".xlsx");
        FileOutputStream out = new FileOutputStream(String.valueOf(path));
        woorkbook.write(out);
        woorkbook.close();
        try {
            Resource resource = new UrlResource(path.toUri());
            if(resource.exists())
            {
                String ah = resource.getFilename();
                String asd = resource.getDescription();
                String c= "test";

                MediaType mediaType = MediaTypeUtils.getMediaTypeForFileName(this.servletContext, "NeracaExcelTemplate" + time + ".xlsx");
                byte [] data = Files.readAllBytes(path);
                ByteArrayResource resource11 = new ByteArrayResource(data);

                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + "NeracaExcelTemplate" + time + ".xlsx")
                        .contentType(mediaType)
                        .contentLength(resource11.contentLength())
                        .body(resource11);

            }
            else
            {
                throw new MyFileNotFoundException("File Not found" + "NeracaExcelTemplate" + time + ".xlsx");
            }
        }
        catch (MalformedURLException ex)
        {
            throw new MyFileNotFoundException("File Not found" + "NeracaExcelTemplate" + time + ".xlsx", ex);
        }


//        File f = new File("C:/Users/Hanif Muhammad/Documents/SAKU/SAKU/src/main/resources/static/view/DOC/NeracaExcelTemplate"+time+".xlsx");
//        Boolean a = f.exists();
//        Boolean as = f.canRead();
//        Boolean bv = f.isFile();
//        HttpServletResponse response;
//        response.setContentType("application/vnd.ms-excel");
//        response.addHeader("content-disposition",
//                "attachment; filename=" + "neraca");


////        URL url = new URL(String.valueOf(path));
//        String filelocation = new File("src\\main\\resources\\static\\view\\DOC\\NeracaExcelTemplate"+time+".xlsx").getAbsolutePath();
//        String filelocation1 = "file:\\\\\\" + filelocation;
//        File resource = new ClassPathResource(filelocation1).getFile();
//        String text = new String(Files.readAllBytes(resource.toPath()));
//        System.out.println(text);
//        URL url1 = new URL(filelocation1);
//        URLConnection conn = url1.openConnection();
//        conn.getContent();


//        Resource resource = resourceLoader.getResource("static\\view\\DOC\\NeracaExcelTemplate"+time+".xlsx");
//        File f = new File(String.valueOf(path));

//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + "neraca.xlsx")
//                .contentType(MediaType.TEXT_PLAIN)
//                .contentLength(resource.contentLength())
//                .body(resource);
//        ClassLoader classLoader = getClass().getClassLoader();
//        InputStream fileoutput = classLoader.getResourceAsStream("NeracaExcelTemplate"+time+".xlsx");
//        Files.copy(fileoutput, Paths.get("neraca.xlsx"), StandardCopyOption.REPLACE_EXISTING);
//        URL website = new URL("http://localhost:8080/view/DOC/NeracaExcelTemplate"+time+".xlsx");
//        URL website = new URL(path);
//        ReadableByteChannel rbc = Channels.newChannel(website.openStream());
//        FileOutputStream fos = new FileOutputStream("neraca.xlsx");
//        fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
//        File file123 = new File(getClass().getResource("NeracaExcelTemplate" + time + ".xlsx").getFile());
//        return "/view/DOC/NeracaExcelTemplate" + time + ".xlsx";
    }



}

