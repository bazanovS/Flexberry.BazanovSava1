package BazanovSava1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import BazanovSava1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ГорячиеНапитки
 */
@Entity(name = "IISBazanovSava1ГорячиеНапитки")
@Table(schema = "public", name = "ГорячиеНапитки")
public class GoryachieNapitki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сахар")
    private String сахар;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Napitki")
    @Convert("Napitki")
    @Column(name = "Напитки", length = 16, unique = true, nullable = false)
    private UUID _napitkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Napitki", insertable = false, updatable = false)
    private Napitki napitki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;


    public GoryachieNapitki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСахар() {
      return сахар;
    }

    public void setСахар(String сахар) {
      this.сахар = сахар;
    }


}