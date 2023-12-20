package BazanovSava1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import BazanovSava1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказ
 */
@Entity(name = "IISBazanovSava1Заказ")
@Table(schema = "public", name = "Заказ")
public class Zakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаказа")
    private Date датазаказа;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @OneToMany(mappedBy = "zakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Eda> edas;

    @OneToMany(mappedBy = "zakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GoryachieNapitki> goryachienapitkis;


    public Zakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаказа() {
      return датазаказа;
    }

    public void setДатаЗаказа(Date датазаказа) {
      this.датазаказа = датазаказа;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }


}